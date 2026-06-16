import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto mb-10 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      <p className="mb-3 text-sm font-medium uppercase text-blue-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
