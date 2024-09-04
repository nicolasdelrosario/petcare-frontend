import { Metadata } from 'next'

interface constructMetadataProps {
	title?: string
	description?: string
	image?: string
	icons?: string
}

export default function constructMetadata({
	title = 'PetCare',
	description = 'PetCare',
	image = '/favicon.ico',
	icons = '/favicon.ico',
}: constructMetadataProps = {}): Metadata {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			locale: 'es-PE',
			images: [{ url: image }],
		},
		icons,
		metadataBase: new URL('https://localhost:3000'),
	}
}
