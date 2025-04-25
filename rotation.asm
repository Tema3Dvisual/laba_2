section .data

S db "waterbottle", 0 
T db "erbottlewat", 0
len equ $ - S - 1
yes db "Yes", 0
no db "No", 0


section .text

global _start

_start:

mov esi, S
mov ecx, len



loop_start:

mov edi, T 
mov ebx, 0
movzx eax, byte [esi]
cmp eax, 0
je found_match
cmp ebx, len
je next_shift
mov edx, eax
mov byte [edi + ebx], dl
inc eax
mov al, byte [esi]
mov byte [edi + ebx], al
inc esi
cmp esi, S
je loop_end
jmp loop_start



next_shift:

mov esi, S
inc ebx
cmp ebx, len
je not_found
dec esi
jmp loop_start



loop_end:

mov esi, S
mov ebx, 0
mov edi, T
cmp esi, T
je found_match
jmp not_found



found_match:

mov eax, 4
mov ebx, 1
mov ecx, yes
mov edx, 3
int 80h
jmp exit



not_found:

mov eax, 4
mov ebx, 1
mov ecx, no
mov edx, 2
int 80h

exit:
mov eax, 1
xor ebx, ebx
int 80h
