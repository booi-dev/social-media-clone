function useLocalStorage() {
  const addData = (data: { id: string }) => {
    console.log("add data to LS");
    localStorage.setItem(data.id, JSON.stringify(data));
  };

  const deleteData = (id: string) => {
    console.log("delete data from LS");
    localStorage.removeItem(id);
  };

  const updateData = (id: string, tobeUpdatedData: object) => {
    console.log("update data in LS");

    const currentValue = localStorage.getItem(id);

    if (!currentValue) return;

    const parsedValue = JSON.parse(currentValue);

    const updatedData = {
      ...parsedValue,
      ...tobeUpdatedData,
    };

    localStorage.setItem(id, JSON.stringify(updatedData));
  };

  const getData = () => {
    console.log("get data from LS");
    return Object.values(localStorage);
  };

  return { addData, deleteData, updateData, getData };
}

export default useLocalStorage;