'use client'

import { Button } from '@/components/shadcn'
import { Appointment } from '@/interfaces/Appointment'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import AppointmentDetailsDialog from '../AppointmentDetailsDialog'

export const columns: ColumnDef<Appointment>[] = [
	{
		accessorFn: row => row.pet.owner.name,
		id: 'owner',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Dueño
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => {
			const ownerName = row.original.pet.owner.name
			return <span>{ownerName}</span>
		},
		sortingFn: 'alphanumeric',
	},
	{
		accessorFn: row => row.pet.name,
		id: 'pet',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Mascota
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => {
			const petName = row.original.pet.name
			return <span>{petName}</span>
		},
		sortingFn: 'alphanumeric',
	},
	{
		accessorKey: 'date',
		header: 'Fecha',
		cell: ({ row }) => {
			const onlyDate = new Date(row.original.date)
			return <span>{onlyDate.toLocaleDateString('es-Pe')}</span>
		},
		enableColumnFilter: false,
	},
	{
		accessorKey: 'hour',
		header: 'Hora',
		cell: ({ row }) => {
			const onlyHour = new Date(row.original.date)
			return (
				<span>
					{onlyHour.toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</span>
			)
		},
		enableColumnFilter: false,
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const appointment = row.original
			return <AppointmentDetailsDialog appointment={appointment} />
		},
	},
]
