import Image from "next/image";

const phone = "absolute bottom-[2%] w-[26%] overflow-hidden rounded-[1.2rem] border border-line bg-surface p-1 shadow-[0_40px_100px_-20px_rgba(0,0,0,.8)] sm:rounded-[2rem] sm:p-2";
const dot = "h-2 w-2 rounded-full bg-line sm:h-2.5 sm:w-2.5";

export default function DeviceShowcase({ priority = false, className = "" }: { priority?: boolean; className?: string }) {
  return (
    <div className={`relative mx-auto max-w-[1360px] px-5 pb-[7%] [mask-image:linear-gradient(to_bottom,#000_78%,transparent)] ${className}`}>
      <div className="mx-auto w-[84%] overflow-hidden rounded-xl border border-line bg-surface shadow-[0_60px_160px_-40px_rgba(120,169,255,.35)] sm:rounded-2xl">
        <div className="flex gap-1.5 border-b border-line px-3 py-2 sm:px-4 sm:py-3"><span className={dot} /><span className={dot} /><span className={dot} /></div>
        <Image src="/vaqueros/hero-4.jpg" alt="Panel de pedidos y estadísticos de Vaquero's" width={2000} height={1430} priority={priority} className="w-full" sizes="(min-width:1024px) 1100px, 90vw" />
      </div>
      <div className={`${phone} left-[1%]`}>
        <Image src="/vaqueros/seguimiento.jpg" alt="Seguimiento del pedido" width={780} height={1688} className="w-full rounded-[0.9rem] sm:rounded-[1.5rem]" sizes="25vw" />
      </div>
      <div className={`${phone} right-[1%]`}>
        <Image src="/vaqueros/menu.jpg" alt="Menú de Vaquero's" width={780} height={1688} className="w-full rounded-[0.9rem] sm:rounded-[1.5rem]" sizes="25vw" />
      </div>
    </div>
  );
}
