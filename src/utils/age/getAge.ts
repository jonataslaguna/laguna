const getAge = () => {
    const currentDate = new Date();
    const birthDate = new Date('1996-01-01');
    
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
};

export default getAge;
