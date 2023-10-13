export async function onChangeInputValue({
    event,
    form,
    setForm
}) {
    const {
        name,
        value
    } = event.target;

    setForm({
        ...form,
        [name]: value
    });

}