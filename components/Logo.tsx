import Image from "next/image";
import recall from "@/images/logos/recall.png"

export function Logo({ className }: { className: string }) {
  return (
    <Image src={recall} alt="zetsy logo" width={1024} height={1024} className={className} />
  )
}
