// FOR GET REQUEST:

import { useEffect, useState } from "react";

interface Person {
  id: number;
  name: string;
}

const PeopleList = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const res = await fetch("http://localhost:5000/users");
      const data: Person[] = await res.json();      //The server response should be an array of Person objects
      setPeople(data);
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h2>People</h2>
      {people.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default PeopleList;


//tsx file = Typescript + JSX file
//JSX is a special syntax used in React that lets you write HTML-like code inside JavaScript.