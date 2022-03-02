import './ExpenseDate.css';

function ExpenseDate(props) {
    const dateMonth = props.date.toLocaleString('es-ES',{month: 'long'});
    const dateYear = props.date.getFullYear();
    const dateDay = props.date.toLocaleString('es-ES', {day: '2-digit'});

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{dateMonth.charAt(0).toUpperCase() + dateMonth.slice(1) }</div>
            <div className='expense-date__year'>{dateYear}</div>
            <div className='expense-date__day'>{dateDay}</div>
        </div>
    )
}

export default ExpenseDate;