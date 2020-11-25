/**
 * Simple player test without completed salary
 */
export const TEST_PLAYERS_01 = {
    nombre: "Juan Perez",
    nivel: "C",
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: null,
    equipo: "rojo" 
}

/**
 * Result simple payer test with completed salary
 */
export const TEST_PLAYERS_01_RESULT = {
    nombre: "Juan Perez",
    nivel: "C",
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: 66666.67,
    equipo: "rojo" 
}

/**
 * Simple array test2
 */
export const TEST_PLAYERS_02 = {
    jugadores : [  
        TEST_PLAYERS_01
    ]
}

/**
 * Simple array test2 result
 */
export const TEST_PLAYERS_02_RESULT = {
    jugadores : [  
        TEST_PLAYERS_01_RESULT
    ]
}

/**
 * Bonus test
 */
export const TEST_TEAMS_01 = {
    equipos: [
        {
            nombre: "Mi equipo",
            niveles: {
                A: 20,
                B: 30,
                C: 180,
                Maradona: 1500
            },
            jugadores: [
                TEST_PLAYERS_01
            ]
        }
    ]
}

/**
 * Bonus test result
 */
export const TEST_TEAMS_01_RESULT = {
    equipos: [
        {
            nombre: "Mi equipo",
            niveles: {
                A: 20,
                B: 30,
                C: 180,
                Maradona: 1500
            },
            jugadores: [{
                nombre: "Juan Perez",
                nivel: "C",
                goles: 10,
                sueldo: 50000,
                bono: 25000,
                sueldo_completo: 51388.89,
                equipo: "rojo"
            }]
        }
    ]
}