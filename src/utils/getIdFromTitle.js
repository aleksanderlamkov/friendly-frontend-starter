const getIdFromTitle = (title) => {
  return title.toLocaleLowerCase().replaceAll(' ', '-')
}

export default getIdFromTitle
