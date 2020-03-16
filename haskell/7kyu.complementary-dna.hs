module Codewars.Kata.DNA where
import Codewars.Kata.DNA.Types

-- data Base = A | T | G | C
type DNA = [Base]

dnaStrand :: DNA -> DNA
dnaStrand (A:xs) = T:(dnaStrand xs)
dnaStrand (T:xs) = A:(dnaStrand xs)
dnaStrand (G:xs) = C:(dnaStrand xs)
dnaStrand (C:xs) = G:(dnaStrand xs)
dnaStrand [] = []