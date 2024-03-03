export default function formatPhoneNumber(number: string) {
    const DDI = number.slice(0, 2)
    const DDD = number.slice(2, 4)
    const firstNumber = number.slice(4, 9)
    const lastNumber = number.slice(9)

    const numberFormated = `+${DDI} (${DDD}) ${firstNumber}-${lastNumber}`;

    return numberFormated
}