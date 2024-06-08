export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8e44ad] to-[#3498db]" />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                From romantic roses to cheerful sunflowers, each petal whispers a tale of natureal
                beauty. Discover the perfect bouquet for every occasion and let the language of
                flowers speak volumes.
              </p>
            </blockquote>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}
