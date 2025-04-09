import { play } from "./rock-paper-scissors";

test("Unentschieden", () => {
    expect(play("rock", "rock")).toBe(0);
});

test("Sieg für Spieler 1", () => {
    expect(play("rock", "scissors")).toBe(1);
});

test("Sieg für Spieler 2", () => {
    expect(play("    RoCK  ", "Paper")).toBe(2);
});