// Next
import Link from 'next/link'

// Components
import { MaxWidthWrapper } from '@/components'

// Shadcn
import { buttonVariants } from '@/components/shadcn/button'

// Icons
import { ArrowRightIcon, CheckIcon } from '@radix-ui/react-icons'

export default function Home() {
	const features = [
		'Gestión centralizada de citas y clientes.',
		'Automatización de recordatorios para citas.',
		'Acceso fácil a reportes financieros y métricas clave.',
		'Personalización de perfiles y roles de empleados.',
		'Interfaz intuitiva y fácil de usar.',
		'Seguridad avanzada para proteger la información de tus clientes y pacientes.',
		'Soporte dedicado y atención personalizada.',
	]

	return (
		<div className='bg-slate-50'>
			{/* main section */}
			<section>
				<MaxWidthWrapper className='pb-24 pt-10 sm:pb-32 lg:gap-x-0 lg:pt-24 xl:grid xl:grid-cols-12 xl:gap-x-8 xl:pb-52 xl:pt-32'>
					<div className='col-span-7 px-6 lg:px-0 lg:pt-4'>
						<div className='flex flex-col items-center text-center xl:items-start xl:text-left'>
							<h1 className='mt-16 w-fit text-balance text-4xl font-bold leading-relaxed tracking-tight text-gray-900 md:text-5xl md:!leading-tight lg:text-6xl'>
								Plataforma Integral Para la
								<span className='bg-primary px-2 text-white'>Gestion</span>
								de Clínicas Veterinarias.
							</h1>
							<p className='mt-8 max-w-prose text-balance text-lg md:text-wrap lg:pr-10 lg:text-left'>
								Simplifica y automatiza la gestión de tu clínica veterinaria con
								una plataforma diseñada para optimizar cada detalle.
							</p>
							<Link
								href='/'
								className={buttonVariants({
									size: 'lg',
									className: 'mt-8',
								})}
							>
								Empezar Ahora
								<ArrowRightIcon className='ml-1.5 h-5 w-5' />
							</Link>
						</div>
					</div>
					<div className='col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-5 lg:mx-0 lg:mt-20'>
						<img
							src='https://placehold.co/450x410'
							alt='Petcare Home Image'
							className='rounded-md'
						/>
					</div>
				</MaxWidthWrapper>
			</section>

			{/* value proposition section */}
			<section className='bg-slate-100 py-24'>
				<MaxWidthWrapper className='flex flex-col items-center'>
					<h2 className='mt-2 text-balance text-center text-4xl font-bold leading-relaxed tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
						Nuestros Beneficios
					</h2>
					<div className='pt-10 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:pt-24 xl:gap-x-8 xl:pt-32'>
						<div className='col-span-full lg:order-2 lg:col-span-2'>
							<h3 className='mt-2 text-balance text-center text-2xl font-bold leading-relaxed tracking-tight text-gray-900 md:text-3xl lg:text-start lg:text-4xl'>
								Descubre los Beneficios de PetCare
							</h3>
							{
								<ul className='my-8 flex flex-col items-start space-y-2 text-left font-medium lg:mb-0'>
									{features.map((feature, index) => (
										<li
											key={index}
											className='flex items-center gap-2 text-left xl:text-lg'
										>
											<CheckIcon className='h-6 w-6 shrink-0 text-pretty text-primary' />
											{feature}
										</li>
									))}
								</ul>
							}
						</div>
						<div className='col-span-full flex justify-center lg:col-span-2'>
							<img
								src='https://placehold.co/600x500'
								alt='Petcare Benefits Image'
								className='rounded-md'
							/>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</div>
	)
}
