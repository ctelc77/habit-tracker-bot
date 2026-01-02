import telebot
import os

# Сюди ти вставиш токен від BotFather (або через змінні оточення)
API_TOKEN = '8114204724:AAHK3SMufHFo6F4u1ecjfO4LXB1XmvCieps'
bot = telebot.TeleBot(API_TOKEN)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    welcome_text = (
        f"Привіт, {message.from_user.first_name}! 👋\n\n"
        "Я твій контролер звичок. Правила прості:\n"
        "1. Заходь у додаток щодня.\n"
        "2. Тисни кнопку Check-in.\n"
        "3. Не пропускай, інакше твій вогонь 🔥 згасне!\n\n"
        "Тисни кнопку нижче, щоб почати 👇"
    )
    bot.reply_to(message, welcome_text)

# Запуск бота
if __name__ == "__main__":
    bot.polling(none_stop=True)
