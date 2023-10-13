export default function Logo({
    height,
    width
}) {

    let src = "https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2=w240-h480-rw";

    return (
        <img
            style={{ height, width }}
            src={src}
            alt="logo"
        />

    )
}