function formatMessage(message, maxLength) {
  // Перевіряю, чи довжина message перевищує maxLength
  if (message.length > maxLength) {
    // Якщо так, обрізаємо рядок до maxLength і додаю три крапки
    return message.slice(0, maxLength) + '...';
  } else {
    // Інакше повертає рядок без змін
    return message;
  }
}


console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"