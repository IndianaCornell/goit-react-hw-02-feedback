# Завдання 1. Віджет відгуків

## Крок 1

Створи додаток для збору статистики відгуків клієнтів (good, neutral, bad). Застосунок не зберігає дані між сесіями.

Стан застосунку:

```js
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
```

## Крок 2

Додай:

- загальну кількість відгуків,
- відсоток позитивних відгуків.

Створи методи:

```js
countTotalFeedback()
countPositiveFeedbackPercentage()
```

## Крок 3

Рефакторинг застосунку:

- Стан залишається в компоненті `<App>`.
- Винеси компоненти:
  - `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`
  - `<FeedbackOptions options={} onLeaveFeedback={}>`
  - `<Section title="">...</Section>`

## Крок 4

Рендер блоку статистики лише після отримання відгуків.

Додай компонент повідомлення:

```jsx
<Notification message="There is no feedback" />
```

---

# Завдання 2. Книга контактів

## Крок 1

Створи застосунок з формою та списком контактів.

Використай інпут для імені:

```html
<input type="text" name="name" required />
```

Стан:

```js
state = {
  contacts: [],
  name: ''
}
```

Кожен контакт має бути об’єктом `{ id, name }`.

## Крок 2

Додай інпут для номера телефону:

```html
<input type="tel" name="number" required />
```

Стан:

```js
state = {
  contacts: [],
  name: '',
  number: ''
}
```

## Крок 3

Додай поле пошуку контактів.

Стан:

```js
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
```

Приклад початкового стану для тестів:

```js
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

## Крок 4

Рефакторинг:

- Стан у `<App>`: тільки `contacts` і `filter`.

```js
state = {
  contacts: [],
  filter: ''
}
```

Виділи 4 компоненти:

- `<ContactForm />`
- `<ContactList />`
- `<ContactItem />`
- `<Filter />`

Структура компонента:

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

## Крок 5

Заборони додавати контакти з однаковими іменами.

Якщо контакт уже існує — покажи `alert`.

## Крок 6

Додай можливість видаляти збережені контакти.
