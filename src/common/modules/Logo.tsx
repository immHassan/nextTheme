import React from "react";
import Image from "next/image";
import Link from "next/link";

import nextsiders from "@/assets/images/HouseFa-White-1.PNG";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={nextsiders} alt="Logo" priority height={20} />
    </Link>
  );
}
