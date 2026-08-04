import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "grommet";
import { getUsers } from "../api/api";
import { RawUser } from "../api/types";
import styles from "./UsersDirectory.css";

// История
// Бэкенд отдаёт список сотрудников, но API нестабильное:
// иногда падает с 500, а в успешном ответе поля названы как попало,
// встречаются дубли и пустые записи.
// Фронтендер до вас открыл эту вкладку, увидел ошибку в консоли — и уволился.

// Задача
// 1. Открой консоль браузера и почини рантайм-ошибку в этом компоненте.
// 2. Обработай состояния загрузки и ошибки запроса
//    (API рандомно отдаёт 500 - это часть задания, а не баг сети).
// 3. Нормализуй данные: убери дубли по id, отфильтруй пустые записи,
//    приведи статус к человекочитаемому виду
//    (ACTIVE -> "Активен", disabled -> "Отключен", vacation -> "В отпуске").
// 4. После успешной загрузки выведи нормализованный список в таблицу.

export function UsersDirectory() {
    const [users, setUsers] = useState<RawUser[]>([]);

    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response.items);
        });
    }, []);

    return (
        <div className={styles.UsersDirectory}>
            <Heading level={3} margin={{ top: 'small' }}>
                Список сотрудников:
            </Heading>
            <Box pad="small" gap="small">
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <Text>{user.profile.full_name} — {user.status}</Text>
                        </li>
                    ))}
                </ul>
            </Box>
        </div>
    );
}
