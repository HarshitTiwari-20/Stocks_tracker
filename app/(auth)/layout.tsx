import Link from "next/link"
import Image from "next/image"



export default function Layout() {
 return (

        <main className="auth-layout">
          <section className="auth-left-section scrollbar-hide-default">
            <Link href="/" className="auth-logo">
              <Image src="/assets/icons/logo.svg" alt="Signalist showSymbolLogo" width={140} height={40} />
            </Link>
          </section>
          <section className="auth-right-section">
            <div className=" z-10 relative lg:mt-4 lg:mb-16">
              <blockquote className="auth-blockquote">
                Let's build and earn something amazing together.
              </blockquote>
              <div className="flex item-center justify-between">
                <div>
                  <cite className="auth-testimonal-author"> Harshit </cite>
                  <p className=" max-md:text-xs text-gray-500 "> Investor and Developer</p>
                </div>
                <div className=" flex item-center gap-0.5">
                  {[1,2,3,4,5].map((star) => (
                    <Image src="/assets/icons/star.svg" alt="star" width={20} height={16} key={star} />
                  ))}
                </div>

              </div>
            </div>
            <div className=" flex-1 relative">
              <Image src="/assets/images/dashboard.png" alt="dashboard" fill className=" object-contain" />
            </div>
          </section>

        </main>
    )
}
