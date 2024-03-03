export default function formatDate(dateString: string) {
    const date = new Date(dateString)
    const day = date.getUTCDate()
    date.setUTCDate(day + 1)

    const dateFormatter = new Intl.DateTimeFormat('pt-br', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: false,

    });

    const dateFormated = dateFormatter.format(date)

    return dateFormated
}