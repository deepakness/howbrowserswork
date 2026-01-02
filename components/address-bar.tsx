"use client";

import Button from "./button";

interface AddressBarProps {
    className?: string;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    isInvalid?: boolean;
    readOnly?: boolean;
    isSubmitDisabled?: boolean;
}

export default function AddressBar({
    readOnly,
    className,
    defaultValue,
    value,
    onChange,
    onSubmit,
    isInvalid,
    isSubmitDisabled,
}: AddressBarProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const address = formData.get("address");

        onSubmit?.(address ? address?.toString() : "");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const isControlled = value !== undefined;

    return (
        <form onSubmit={handleSubmit}>
            <div
                className={[
                    "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm",
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-2">
                    <div className="flex gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                        <div className="flex-1">
                            <input
                                readOnly={readOnly}
                                name="address"
                                value={isControlled ? value : undefined}
                                defaultValue={
                                    isControlled ? undefined : defaultValue
                                }
                                onChange={handleChange}
                                aria-invalid={isInvalid || undefined}
                                className={[
                                    "w-full rounded-md border bg-white px-3 py-1 text-sm text-slate-700 shadow-inner",
                                    "focus:outline-none focus:ring-0",
                                    isInvalid
                                        ? "border-red-400"
                                        : "border-slate-200",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                placeholder="Search or type a URL..."
                            />
                        </div>
                        <Button type="submit" disabled={isSubmitDisabled}>
                            Go
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
}
