// React PDF
import { PDFDownloadLink } from '@react-pdf/renderer'

// Interfaces
import { Pet } from '@/interfaces/Pet'

// Components
import { PetHistoryPDF } from '../'

// Shadcn Components
import { Button } from '@/components/shadcn'

interface PDFGeneratorServiceProps {
	pet: Pet
}

export default function PDFGeneratorService({ pet }: PDFGeneratorServiceProps) {
	return (
		<PDFDownloadLink
			document={<PetHistoryPDF pet={pet} />}
			fileName={`historial_${pet.name}.pdf`}
		>
			<Button>Descargar PDF</Button>
		</PDFDownloadLink>
	)
}
