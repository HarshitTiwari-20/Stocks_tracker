import Link from "next/link";

interface FooterLinkProps {
  text: string;
  linkText: string;
  href: string;
}

export default function FooterLink({ text, linkText, href }: FooterLinkProps) {
  return (
    <div className=" text-center pt-4">
      <div className=" text-sm text-gray-500">
        {text}{ ` `}
        <Link href={href} className="footer-link">
          {linkText}
        </Link>
      </div>
    </div>
  )
}