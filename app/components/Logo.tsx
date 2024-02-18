import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  src: string
  alt: string
  height?: number
  width?: number
}

const Logo: React.FC<LogoProps> = () => {

  return (
    <Link href="/">
      <Image src={'/logo.png'} alt={'logo'} height={50} width={50} />
    </Link>)
}

export default Logo
