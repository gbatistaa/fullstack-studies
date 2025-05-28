export function handleSQLiteError(err) {
  if (!err) return;

  const errorMessages = {
    SQLITE_ERROR: "Generic SQL error. Check your syntax.",
    SQLITE_INTERNAL: "Internal SQLite error.",
    SQLITE_PERM: "Permission denied.",
    SQLITE_ABORT: "Operation was aborted.",
    SQLITE_BUSY: "The database is busy. Try again later.",
    SQLITE_LOCKED: "The resource is locked.",
    SQLITE_NOMEM: "Out of memory.",
    SQLITE_READONLY: "Attempt to write to a read-only database.",
    SQLITE_INTERRUPT: "Operation was interrupted.",
    SQLITE_IOERR: "Input/output error. Check disk or file system.",
    SQLITE_CORRUPT: "The database file is corrupted.",
    SQLITE_FULL: "Disk is full.",
    SQLITE_CANTOPEN: "Unable to open the database file.",
    SQLITE_SCHEMA: "Database schema has changed.",
    SQLITE_TOOBIG: "Data too large to be processed.",
    SQLITE_CONSTRAINT: "Constraint violation.",
    SQLITE_MISMATCH: "Data type mismatch.",
    SQLITE_MISUSE: "Library used incorrectly.",
    SQLITE_AUTH: "Authentication failed.",
    SQLITE_RANGE: "Parameter index out of range.",
    SQLITE_NOTADB: "File opened is not a valid SQLite database.",
  };

  const message = errorMessages[err.code] || "Unknown SQLite error.";
  console.error(`🛑 SQLite Error (${err.code}): ${message}`);
  console.error(`📄 Details: ${err.message}`);
}
