import { Box, Heading } from "grommet";
import styles from "./styles.css";

const tstObj: any = {a: '1', b: { d: '3', e: {g: '4'}, f: {h: '5'}}, c: '2'};
const tstPath = 'b.f.h'
const answer1 = '5'

const tstObj2: any = {a: null, b: { d: '3', e: {g: '4'}, f: {h: '5'}}, c: { d: { e: { f: {}, j: { k: '2'}} }, e: null }};
const tstPath2 = 'c.d.e.j.k'
const answer2 = '2'


const tstObj3: any = {a: null, b: { d: {}, e: null }, c: { c: { c: '7'}}};
const tstPath3 = 'c.c.c'
const answer3 = '7'


/** Задача:
 * 1. Описать функцию getObjProperty
 * 2. Пройти мини - тесты (позеленить квадраты)
 */

export const ObjProperty = () => {
    const getObjProperty = (obj: any, path: string) => {
        return null
    }

    // код ниже не трогаем
    return (
        <div className={styles.ObjProperty}>
            <Heading level={3} margin={{ top: 'small' }}>
                Пройденный проверки:
            </Heading>
            <Box
                direction="row-responsive"
                justify="evenly"
                align="start"
                pad="small"
                gap="medium"
            >
                <div className={styles.check} style={{ backgroundColor: getObjProperty(tstObj, tstPath) === answer1 ? 'green' : '#7D4CDB'}} />
                <div className={styles.check} style={{ backgroundColor: getObjProperty(tstObj2, tstPath2) === answer2 ? 'green' : '#7D4CDB'}} />
                <div className={styles.check} style={{ backgroundColor: getObjProperty(tstObj3, tstPath3) === answer3 ? 'green' : '#7D4CDB'}} />
            </Box>
        </div>
    );
}
