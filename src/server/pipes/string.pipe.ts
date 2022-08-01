import { check } from 'express-validator';

export const stringff = (dto) => [
check(dto.name)
        .exists()
        .withMessage('No existe el campo ' + ' ' + dto.name)
        .isString()
        .withMessage('Debe ser una texto')
        .isLength({ min: +dto.min, max:+dto.max})
        .withMessage('Debe ser mayor a 5 y menor a 15'),
]