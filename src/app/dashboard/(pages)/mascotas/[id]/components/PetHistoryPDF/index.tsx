// ReactPDF
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Interfaces
import { Appointment } from '@/interfaces/Appointment'
import { Pet } from '@/interfaces/Pet'

// Utility
import { formatDate } from 'date-fns'

const styles = StyleSheet.create({
	page: { padding: 30 },
	header: { fontSize: 18, marginBottom: 10, fontWeight: 'black' },
	text: { fontSize: 12, marginBottom: 4 },
	table: { marginTop: 10, marginBottom: 20 },
	tableRow: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#cccccc',
		paddingBottom: 4,
		marginBottom: 4,
	},
	cellHeader: {
		flex: 1,
		fontSize: 12,
		fontWeight: 'bold',
		paddingRight: 4,
	},
	cell: { flex: 1, fontSize: 12, paddingRight: 4 },
	divider: { borderBottomWidth: 1, marginBottom: 10, marginTop: 10 },
	appointment: { marginBottom: 12, paddingBottom: 8, borderBottomWidth: 1 },
	appointmentText: { fontSize: 12, marginBottom: 4 },
})

interface PetHistoryPDFProps {
	pet: Pet
}

const PetHistoryPDF = ({ pet }: PetHistoryPDFProps) => {
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				{/* Header */}
				<View>
					<Text style={styles.header}>Historial Clínico de {pet.name}</Text>
					<Text style={styles.text}>
						Dueño: {pet.owner?.name || 'No especificado'}
					</Text>
				</View>

				{/* Pet Details Table */}
				<View style={styles.table}>
					{/* Table Header */}
					<View style={styles.tableRow}>
						<Text style={styles.cellHeader}>Campo</Text>
						<Text style={styles.cellHeader}>Detalle</Text>
					</View>

					{/* Table Rows */}
					<View style={styles.tableRow}>
						<Text style={styles.cellHeader}>Nombre</Text>
						<Text style={styles.cell}>{pet.name}</Text>
					</View>
					<View style={styles.tableRow}>
						<Text style={styles.cellHeader}>Especie</Text>
						<Text style={styles.cell}>{pet.species || 'No especificada'}</Text>
					</View>
					<View style={styles.tableRow}>
						<Text style={styles.cellHeader}>Raza</Text>
						<Text style={styles.cell}>{pet.breed || 'No especificada'}</Text>
					</View>
					<View style={styles.tableRow}>
						<Text style={styles.cellHeader}>Sexo</Text>
						<Text style={styles.cell}>{pet.sex ? 'Macho' : 'Hembra'}</Text>
					</View>
					<View style={styles.tableRow}>
						<Text style={styles.cellHeader}>Peso</Text>
						<Text style={styles.cell}>{pet.weight} kg</Text>
					</View>
					<View style={styles.tableRow}>
						<Text style={styles.cellHeader}>Edad</Text>
						<Text style={styles.cell}>{pet.age || 'No especificada'}</Text>
					</View>
				</View>

				{/* Appointments Section */}
				<View>
					<Text style={styles.header}>Citas</Text>
					<View style={styles.divider}></View>
					{pet.appointments && pet.appointments.length > 0 ? (
						pet.appointments.map((appointment: Appointment, index: number) => (
							<View key={index} style={styles.appointment}>
								<Text style={styles.appointmentText}>
									{appointment.dateTime
										? formatDate(appointment.dateTime, 'dd MMM yyyy')
										: 'N/A'}
								</Text>

								<Text style={styles.appointmentText}>
									{appointment.time ? appointment.time : 'N/A'}
								</Text>

								<Text style={styles.appointmentText}>
									{appointment.reason || 'N/A'}
								</Text>
							</View>
						))
					) : (
						<Text>No hay citas registradas.</Text>
					)}
				</View>
			</Page>
		</Document>
	)
}

export default PetHistoryPDF
