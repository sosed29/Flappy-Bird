export const Images = {
    field: "img/field.png", // Путь к изображению поля
    pipeUp: "img/pipeUp.png", // Путь к изображению верхней трубы
    pipeBottom: "img/pipeBottom.png", // Путь к изображению нижней трубы
    bird: "img/bird.png", // Путь к изображению птицы
    fieldBottom: "img/fieldBottom.png", // Путь к изображению нижней части поля
};

export const Sounds = {
    flap: "audio/Wing.mp3", // Путь к звуковому файлу взмаха крыльев
    score: "audio/Point.mp3", // Путь к звуковому файлу при наборе очков
    death: "audio/hit.mp3", // Путь к звуковому файлу при столкновении
};

export const GameSettings = {
    pipeSpeed: 1, // Скорость перемещения труб
    pipeGap: 120, // Разрыв между верхней и нижней трубой
    birdX: 50, // Позиция птицы по оси X
    birdY: 200, // Позиция птицы по оси Y
    birdGravity: 1.4, // Гравитация, действующая на птицу
};