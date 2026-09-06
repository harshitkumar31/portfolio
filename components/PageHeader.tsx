export default function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10 md:mb-14">
      {eyebrow && (
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0071e3] dark:text-[#2997ff]">
          {eyebrow}
        </p>
      )}
      <h1 className="text-[36px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] sm:text-[48px] md:text-[56px]">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-[36rem] text-[18px] leading-[1.45] tracking-[-0.02em] text-[#6e6e73] dark:text-[#86868b] sm:text-[20px]">
          {description}
        </p>
      )}
    </header>
  );
}
