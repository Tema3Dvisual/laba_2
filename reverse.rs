use std::io::{self, Write};

fn is_ascending_digits(num: i32) -> bool {
    let num_str = num.to_string();
    if num_str.len() <= 1 {
        return false;
    }

    for i in 1..num_str.len() {
        if num_str.chars().nth(i).unwrap() <= num_str.chars().nth(i - 1).unwrap() {
            return false;
        }
    }
    true
}

fn reverse_number(num: i32) -> i32 {
    let num_str = num.to_string();
    let reversed_str: String = num_str.chars().rev().collect();

    match reversed_str.parse::<i32>() {
        Ok(reversed_num) => reversed_num,
        Err(_) => {
            eprintln!("Превышение диапазона i32 для числа {}", num);
            0
        }
    }
}

fn main() -> io::Result<()> {
    print!("Введите последовательность чисел, разделенных пробелами: ");
    io::stdout().flush()?;  // Ensure prompt is displayed

    let mut input = String::new();
    io::stdin().read_line(&mut input)?;

    let numbers_str: Vec<&str> = input.trim().split_whitespace().collect();
    let mut numbers: Vec<i32> = Vec::new();

    for num_str in numbers_str {
        match num_str.parse::<i32>() {
            Ok(num) => numbers.push(num),
            Err(_) => {
                eprintln!("Некорректный ввод: {} не является числом.", num_str);
            }
        }
    }

    let mut result: Vec<i32> = Vec::new();

    for num in numbers {
        if is_ascending_digits(num) {
            result.push(reverse_number(num));
        }
    }

    print!("Результат: ");
    if result.is_empty() {
        println!("В последовательности нет чисел, соответствующих условию.");
    } else {
        for (i, num) in result.iter().enumerate() {
            print!("{}", num);
            if i < result.len() - 1 {
                print!(" ");
            }
        }
        println!();
    }

    Ok(())
}
