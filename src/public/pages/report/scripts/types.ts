declare class grecaptcha {
    static reset(): void;
    static getResponse(): string;
}

interface Profile {
    username: string,
    rating: string
}

interface Game {
    white: Profile,
    black: Profile,
    timeClass: string,
    pgn: string
}

interface Coordinate {
    x: number,
    y: number
}

interface Move {
    san: string,
    uci: string
}

interface Evaluation {
    type: "cp" | "mate",
    value: number
}

interface EngineLine {
    id: number,
    depth: number,
    evaluation: Evaluation,
    moveUCI: string,
    moveSAN?: string
}

interface Position {
    fen: string,
    move?: Move,
    topLines?: EngineLine[],
    cutoffEvaluation?: Evaluation,
    worker?: Stockfish | string
    classification?: string,
    opening?: string
}

interface Report {
    accuracies: {
        white: number,
        black: number
    },
    positions: Position[]
}

interface ParseResponse {
    message?: string,
    positions?: Position[]
}

interface ReportResponse {
    message?: string,
    results?: Report 
}