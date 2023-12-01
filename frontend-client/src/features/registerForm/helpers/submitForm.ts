export const onSubmit = (data: any) => {
  if (data.password === data.confirmPassword) {
    return console.log(data);
  }
  console.log("error")
};
