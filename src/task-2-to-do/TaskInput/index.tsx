import React, { ChangeEvent, useCallback, useState } from "react";
import styles from "./Task.css";
import { Button, TextInput } from "grommet";
import { Add } from "grommet-icons";

type Props = {
  onAdd?: (name: string) => void;
};

export function TaskInput({ onAdd }: Props) {
  const [name, setName] = useState("");

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    if (onAdd) {
      onAdd(name);
    }
  }, [name]);

  return (
    <div className={styles.TaskInput}>
        <TextInput
            onChange={handleOnChange}
            value={name}
            placeholder="Введите задачу"
            aria-label="Input Text"
        />
        <Button icon={<Add />} label="Добавить" onClick={handleAdd} primary />
    </div>
  );
}
