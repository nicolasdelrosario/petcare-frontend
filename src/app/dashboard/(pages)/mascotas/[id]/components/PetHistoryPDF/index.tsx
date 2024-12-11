// ReactPDF
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'
import { Pet } from '@/interfaces/Pet'

// Utility
import { format } from 'date-fns'

const styles = StyleSheet.create({
	page: { padding: 30 },
	header: { fontSize: 24, marginBottom: 16, fontWeight: 'bold' },
	sectionHeader: {
		fontSize: 18,
		marginTop: 10,
		marginBottom: 10,
		fontWeight: 'bold',
	},
	text: { fontSize: 12, marginBottom: 6 },
	divider: { borderBottomWidth: 1, marginBottom: 10, marginTop: 10 },
	appointment: { marginBottom: 12, paddingBottom: 8, borderBottomWidth: 1 },
	appointmentText: { fontSize: 12, marginBottom: 4 },
})

interface PetHistoryPDFProps {
	pet: Pet
}

export default function PetHistoryPDF({ pet }: PetHistoryPDFProps) {
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				{/* Header Section */}
				<View>
					<Text style={styles.header}>Historial Clínico de {pet.name}</Text>
					<Text style={styles.text}>
						Dueño: {pet.owner?.name || 'No especificado'}
					</Text>
				</View>

				{/* Pet Details Section */}
				<View>
					<Text style={styles.sectionHeader}>Datos de la mascota</Text>
					<Text style={styles.text}>Nombre: {pet.name}</Text>
					<Text style={styles.text}>
						Especie: {pet.species || 'No especificada'}
					</Text>
					<Text style={styles.text}>
						Raza: {pet.breed || 'No especificada'}
					</Text>
					<Text style={styles.text}>Sexo: {pet.sex ? 'Macho' : 'Hembra'}</Text>
					<Text style={styles.text}>Peso: {pet.weight} kg</Text>
					<Text style={styles.text}>
						Color: {pet.color || 'No especificado'}
					</Text>
					<Text style={styles.text}>Edad: {pet.age || 'No especificada'}</Text>
					<Text style={styles.text}>
						Características: {pet.characteristics || 'No especificadas'}
					</Text>
				</View>

				{/* Appointments Section */}
				<View>
					<Text style={styles.sectionHeader}>Citas</Text>
					<View style={styles.divider}></View>
					{pet.appointments.map((appointment: Appointment, index: number) => (
						<View key={index} style={styles.appointment}>
							<Text style={styles.appointmentText}>
								<strong>Fecha:</strong>{' '}
								{appointment?.dateTime
									? format(new Date(appointment.dateTime), 'dd MMM yyyy')
									: 'N/A'}
							</Text>
							<Text style={styles.appointmentText}>
								<strong>Hora:</strong> {appointment?.time || 'N/A'}
							</Text>
							<Text style={styles.appointmentText}>
								<strong>Motivo:</strong> {appointment.reason || 'N/A'}
							</Text>
						</View>
					))}
				</View>
			</Page>
		</Document>
	)
}
