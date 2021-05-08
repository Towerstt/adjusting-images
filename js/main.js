let inputs = document.querySelectorAll('.controls input')

const handleUpdate = (event) =>{
    let suffix = event.target.dataset.sizing || ''
    let newValue = event.target.value + suffix
    document.documentElement.style.setProperty(`--${event.target.name}`, newValue)

}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))