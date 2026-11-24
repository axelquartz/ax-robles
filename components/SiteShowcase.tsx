import Image from "next/image";

const dot = "h-2 w-2 rounded-full bg-line sm:h-2.5 sm:w-2.5";

export function BrowserFrame({ src, alt, w, h, priority = false, className = "" }: { src: string; alt: string; w: number; h: number; priority?: boolean; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-surface shadow-[0_60px_160px_-40px_rgba(120,169,255,.3)] sm:rounded-2xl ${className}`}>
      <div className="flex gap-1.5 border-b border-line px-3 py-2 sm:px-4 sm:py-3"><span className={dot} /><span className={dot} /><span className={dot} /></div>
      <Image src={src} alt={alt} width={w} height={h} priority={priority} className="w-full" sizes="(min-width:1024px) 1100px, 92vw" />
    </div>
  );
}

export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[1.2rem] border border-line bg-surface p-1 shadow-[0_40px_100px_-20px_rgba(0,0,0,.8)] sm:rounded-[2rem] sm:p-2 ${className}`}>
      <Image src={src} alt={alt} width={780} height={1688} className="w-full rounded-[0.9rem] sm:rounded-[1.5rem]" sizes="(min-width:1024px) 300px, 40vw" />
    </div>
  );
}

export default function SiteShowcase({ desktop, phone, w, h, nombre, className = "" }: { desktop: string; phone: string; w: number; h: number; nombre: string; className?: string }) {
  return (
    <div className={`relative mx-auto max-w-[1360px] px-5 pb-[7%] [mask-image:linear-gradient(to_bottom,#000_82%,transparent)] ${className}`}>
      <BrowserFrame src={desktop} alt={`Sitio de ${nombre} en escritorio`} w={w} h={h} priority className="mx-auto w-[86%]" />
      <PhoneFrame src={phone} alt={`Sitio de ${nombre} en celular`} className="absolute bottom-[2%] right-[1%] w-[24%]" />
    </div>
  );
}
