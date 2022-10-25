export const updateEvent = (,
  name: string,
  value: string | string[] | Date | null
) => {
  setInput({ ...input, [name]: value });
  console.log(input);
};
const selectEvent = (id: number) => {
  setInput(() => events.filter((event) => event.id === id)[0]);
};
const deleteEvent = (id: number) => {
  setEvents(() => events.filter((event) => event.id !== id));
};
const saveEvent = (id: number) => {
  setEvents(() =>
    events.map((event) => {
      if (event.id === id) {
        return input;
      }
      return event;
    })
  );
};
