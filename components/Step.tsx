export default function Step({ number, title }) {
  return (
    <div className="step flex items-center py-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0071e3] text-[13px] font-semibold text-white">
        {number}
      </div>
      <h3 className="ml-3 font-semibold tracking-[-0.022em]">{title}</h3>
    </div>
  );
}
