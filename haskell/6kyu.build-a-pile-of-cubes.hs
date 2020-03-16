module Codewars.Kata.PileOfCubes where

findNb :: Integer -> Integer
findNb n
    | 4 * n == k^2 * (k+1)^2  = k
    | otherwise               = -1
  where k = floor $ sqrt $ sqrt $ fromInteger (4 * n)