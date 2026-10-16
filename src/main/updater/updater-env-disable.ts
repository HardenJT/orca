/** Local-build opt-out: ORCA_DISABLE_UPDATER=1 keeps a custom build from being offered official releases. */
export function isUpdaterDisabledByEnv(): boolean {
  const value = process.env.ORCA_DISABLE_UPDATER?.trim().toLowerCase()
  return value === '1' || value === 'true'
}
