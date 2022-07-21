import { IsInt } from 'class-validator';

export class UserStructure { 

/*     @IsString()
    firstName: string; 
  
    @IsString()
    lastName: string; 
        
 
    age: number; */ 
    @IsInt()
    id:number;
 }