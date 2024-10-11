import { MaxWidthWrapper } from '@/components'

export default function Page() {
	return (
		<MaxWidthWrapper className='px-2.5'>
			<div className='gap mt-8 grid auto-cols-auto'>
				<h1 className='text-left text-3xl font-bold leading-relaxed tracking-tight text-gray-900 md:text-4xl lg:text-5xl'>
					Terminos y Condiciones
				</h1>
				<p className='mt-4 text-left text-xs uppercase leading-relaxed tracking-widest text-slate-500'>
					Fecha de última actualizacion: 3 de Octubre de 2024
				</p>
				<h2 className='mb-3 mt-4 text-xl font-semibold leading-relaxed tracking-tight'>
					1. Aceptación de los Términos
				</h2>
				<p className='text-balance md:text-wrap'>
					Al utilizar la plataforma PetCare, aceptas y te comprometes a cumplir
					con estos términos y condiciones. Este acuerdo establece los derechos
					y responsabilidades legales entre tú, como usuario, y PetCare. Si no
					estás de acuerdo con alguno de los términos expuestos, te solicitamos
					que no utilices nuestros servicios.
				</p>
				<p className='text-balance md:text-wrap'>
					El uso continuo de nuestra plataforma implica que comprendes y aceptas
					cualquier modificación que podamos realizar a estos términos. PetCare
					se reserva el derecho de actualizar o cambiar los términos en
					cualquier momento, y dichas modificaciones serán efectivas desde el
					momento en que se publiquen en nuestra plataforma.
				</p>
				<p className='text-balance md:text-wrap'>
					Es tu responsabilidad revisar periódicamente esta sección para estar
					al tanto de cualquier cambio en los términos. Si en algún momento
					decides no aceptar los términos actualizados, deberás dejar de
					utilizar la plataforma de manera inmediata.
				</p>

				<h2 className='tracking-tigh mb-3 mt-4 text-xl font-semibold leading-relaxed'>
					2. Descripción del Servicio
				</h2>
				<p className='md:text-wrap'>
					PetCare proporciona una plataforma para la gestión veterinaria, que
					incluye, pero no se limita a, la programación de citas, gestión de
					historiales médicos y recordatorios de vacunación para mascotas.
				</p>

				<h2 className='mb-3 mt-4 text-xl font-semibold leading-relaxed tracking-tight'>
					3. Uso de la Plataforma
				</h2>
				<p className='text-balance md:text-wrap'>
					Te comprometes a utilizar la plataforma de manera legal y responsable.
					No deberás:
				</p>
				<ul className='ml-8 list-disc'>
					<li>Proporcionar información falsa o engañosa.</li>
					<li>
						Utilizar el servicio para actividades ilícitas o no autorizadas.
					</li>
					<li>Interferir con el funcionamiento de la plataforma.</li>
				</ul>

				<h2 className='mb-3 mt-4 text-xl font-semibold leading-relaxed tracking-tight'>
					4. Responsabilidad
				</h2>
				<p className='md:text-wrap'>
					PetCare no será responsable de daños directos, indirectos,
					incidentales o consecuentes que puedan surgir del uso de la
					plataforma, incluyendo, pero no limitado a, la pérdida de datos o
					interrupciones del servicio.
				</p>

				<h2 className='mb-3 mt-4 text-xl font-semibold leading-relaxed tracking-tight'>
					5. Cambios en los Términos
				</h2>
				<p className='md:text-wrap'>
					Nos reservamos el derecho de modificar estos términos en cualquier
					momento. Las modificaciones serán efectivas al publicarse en la
					plataforma. Te recomendamos revisar periódicamente esta sección.
				</p>

				<h2 className='mb-3 mt-4 text-xl font-semibold leading-relaxed tracking-tight'>
					6. Contacto
				</h2>
				<p className='mb-10 md:text-wrap'>
					Si tienes alguna pregunta sobre estos términos y condiciones, no dudes
					en contactarnos a través de nuestro sitio web.
				</p>
			</div>
		</MaxWidthWrapper>
	)
}
