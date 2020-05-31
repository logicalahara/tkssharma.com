
import React, { Component } from 'react'

export default class SocialPage extends Component {
    render() {
        return (
          <div className="social-grid container">
            <a href="https://www.youtube.com/user/vibbbbbba?sub_confirmation=1" aria-label="View DevTips" className="devtips">
              <div><h4>DevTips</h4><p>My YouTube channel where I livestream every weekday about Web Development. Come join me and learn something new.</p></div><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzI3IiBoZWlnaHQ9IjIzMCIgdmlld0JveD0iMCAwIDMyNyAyMzAiPjxkZWZzPjxyZWN0IGlkPSJkZXZ0aXBzLWEiIHdpZHRoPSI3MjAiIGhlaWdodD0iMjMwIi8+PGxpbmVhckdyYWRpZW50IGlkPSJkZXZ0aXBzLWQiIHgxPSI5NS40MjglIiB4Mj0iNi45NDQlIiB5MT0iMjUuNzk5JSIgeTI9IjczLjk3OCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGQjVENTMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNDQTQzM0EiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IGlkPSJkZXZ0aXBzLWMiIHdpZHRoPSIyMjAiIGhlaWdodD0iMTQyIiByeD0iNSIvPjxyZWN0IGlkPSJkZXZ0aXBzLWYiIHdpZHRoPSIyMjAiIGhlaWdodD0iMTQyIiByeD0iNSIvPjxyZWN0IGlkPSJkZXZ0aXBzLWciIHdpZHRoPSIyMjAiIGhlaWdodD0iMTQyIiByeD0iNSIvPjxyZWN0IGlkPSJkZXZ0aXBzLWgiIHdpZHRoPSIyMjAiIGhlaWdodD0iMTQyIiByeD0iNSIvPjxyZWN0IGlkPSJkZXZ0aXBzLWkiIHdpZHRoPSIyMjAiIGhlaWdodD0iMTQyIiByeD0iNSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTMgLTM2MDYpIj48cmVjdCB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3Njk2IiBmaWxsPSIjRkFGQUZBIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYwIDM2MDYpIj48bWFzayBpZD0iZGV2dGlwcy1iIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNkZXZ0aXBzLWEiLz48L21hc2s+PHVzZSBmaWxsPSIjRTc1MjQ4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNkZXZ0aXBzLWEiLz48ZyBtYXNrPSJ1cmwoI2RldnRpcHMtYikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5MyAtMTg5KSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyMzMpIj48bWFzayBpZD0iZGV2dGlwcy1lIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNkZXZ0aXBzLWMiLz48L21hc2s+PHVzZSBmaWxsPSJ1cmwoI2RldnRpcHMtZCkiIHhsaW5rOmhyZWY9IiNkZXZ0aXBzLWMiLz48cGF0aCBmaWxsPSIjQkUzRjM2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMDguMzAyMjc1LDYyLjgyNjcwMjIgQzEwNi45NjYxODEsNjEuOTAwNDA4MSAxMDUuMTg4MTEyLDYyLjg5Mzk3NTIgMTA1LjE4ODExMiw2NC41NDk5OTA4IEwxMDUuMTg4MTEyLDc4LjM5MjczNTUgQzEwNS4xODgxMTIsODAuMDQ4NzI0NyAxMDYuOTY4NzI0LDgxLjA0MjMxODIgMTA4LjMwMjI3NSw4MC4xMTYwMjQxIEwxMTguMjgyOTMsNzMuMTYwODY5NiBDMTE5LjQ4OTg0LDcyLjI5OTIyNTMgMTE5LjQ4OTg0LDcwLjUxMTI4NjkgMTE4LjI4MjkzLDY5LjY0OTY0MjYgTDEwOC4zMDIyNzUsNjIuODI2NzAyMiBaIiBtYXNrPSJ1cmwoI2RldnRpcHMtZSkiLz48dGV4dCBmaWxsPSIjQkUzRjM2IiBmb250LWZhbWlseT0iSW50ZXItQmxhY2ssIEludGVyIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iNzAwIiBsZXR0ZXItc3BhY2luZz0iLjg3IiBtYXNrPSJ1cmwoI2RldnRpcHMtZSkiPjx0c3BhbiB4PSIxNzUiIHk9IjIwIj5MSVY8L3RzcGFuPiA8dHNwYW4geD0iMTk0LjE4NyIgeT0iMjAiPkU8L3RzcGFuPjwvdGV4dD48Y2lyY2xlIGN4PSIyMDciIGN5PSIxNiIgcj0iMiIgZmlsbD0iI0JFM0YzNiIgbWFzaz0idXJsKCNkZXZ0aXBzLWUpIi8+PC9nPjx1c2UgZmlsbD0iI0NBNDMzQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM1IDE1NykiIHhsaW5rOmhyZWY9IiNkZXZ0aXBzLWYiLz48dXNlIGZpbGw9IiNDQTQzM0EiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNzYpIiB4bGluazpocmVmPSIjZGV2dGlwcy1nIi8+PHVzZSBmaWxsPSIjQ0E0MzNBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDM5MCkiIHhsaW5rOmhyZWY9IiNkZXZ0aXBzLWgiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzUgMzE0KSI+PG1hc2sgaWQ9ImRldnRpcHMtaiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjZGV2dGlwcy1pIi8+PC9tYXNrPjx1c2UgZmlsbD0iI0NBNDMzQSIgeGxpbms6aHJlZj0iI2RldnRpcHMtaSIvPjxnIGZpbGw9IiNFNzUyNDgiIG1hc2s9InVybCgjZGV2dGlwcy1qKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAgMzApIj48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iOCIgcng9IjIiLz48cmVjdCB3aWR0aD0iNzQiIGhlaWdodD0iOCIgeT0iMjEiIHJ4PSIyIi8+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjgiIHk9IjQyIiByeD0iMiIvPjxyZWN0IHdpZHRoPSI0MyIgaGVpZ2h0PSI4IiB4PSIzNCIgeT0iNDIiIHJ4PSIyIi8+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==" alt="DevTips" />
            </a>
            <div className="tiles">
              <a aria-label="View Workshops" className="workshop" href="/bootcamp/">
                <div><h4>Workshops</h4></div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjI2IiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDIyNiAxNDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0id29ya3Nob3BzLWEiIHgxPSIxMTcuMDQ1JSIgeDI9IjkuMDc4JSIgeTE9Ii0xMi45ODQlIiB5Mj0iODguMDM1JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0MzOEFGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzkwNTJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJ3b3Jrc2hvcHMtYiIgeDE9Ii03LjgxMiUiIHgyPSIxMTcuMDQ1JSIgeTE9IjY3Ljg3NiUiIHkyPSIzMy4xMjYlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjQzM4QUZGIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOTA1MkZGIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBpZD0id29ya3Nob3BzLWMiIGQ9Ik05Ny4wMDA5MTM3LDYwIEwxMjkuMDAwOTE0LDYwIEwxMjkuMDAwOTE0LDY4IEMxMjkuMDAwOTE0LDY5LjY1Njg1NDIgMTI3LjY5ODQ2OSw3MSAxMjYuMDkxODIzLDcxIEw5Ny4wMDA5MTM3LDcxIEw5Ny4wMDA5MTM3LDYwIFoiLz48ZmlsdGVyIGlkPSJ3b3Jrc2hvcHMtZCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCUiIHk9IjAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxmZU9mZnNldCBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0SW5uZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dPZmZzZXRJbm5lcjEiIGluMj0iU291cmNlQWxwaGEiIGsyPSItMSIgazM9IjEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiByZXN1bHQ9InNoYWRvd0lubmVySW5uZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0lubmVySW5uZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC41MDk4MDM5MjIgMCAwIDAgMCAwLjI1ODgyMzUyOSAwIDAgMCAwIDAuOTY0NzA1ODgyIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNTggLTM5NzEpIj48cmVjdCB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3Njk2IiBmaWxsPSIjRkFGQUZBIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzM4IDM4ODEpIj48cmVjdCB3aWR0aD0iMjI3IiBoZWlnaHQ9IjIzMCIgeD0iMjAiIGZpbGw9IiM4MjQyRjYiIHJ4PSI1Ii8+PHBhdGggZmlsbD0iIzZEMzdDRSIgZD0iTTMwLjAyMDY4MzksMjUyLjM0MzU0NyBMMjUyLjA2MDE4OSwyMDUuMTQ3NTkzIEMyNDMuNDYzNTIyLDE2NC43MDM0NTMgMjM5LjE4OTk2OCwxNDQuMzEzMDYzIDIzOS4yMzk1MjYsMTQzLjk3NjQyMiBDMjMxLjkyMDA1MSwxNDguNTk5MjQ2IDIxNi4wOTI0ODMsMTUzLjQ5NzAxIDIwMC4wMTQxODEsMTUwLjc4MDUxNSBDMTczLjczMTUwOSwxNDYuMzM5OTUgMTY1LjQ2MDgxNSwxMzguNzI4NzIyIDEzNi4wNjYyNjMsMTM4LjYxMjk2OCBDMTAwLjgxMzAxNSwxMzguNDc0MTQyIDg2LjU1MjQ1ODIsMTMxLjEwOTMxOSA1NS4zNDMzMjk5LDEzNS41MjU5MjcgQzI2LjU2MTIyNjEsMTM5LjU5OTA3MSAxNS41MDg2MDA5LDE1MC4xMjcxMDQgMTAuNDg4MTA1NSwxNjAuNjg0OTk2IEMxMC41MTk5Njc0LDE2MC42NzgyMjQgMTcuMDMwODI2OSwxOTEuMjMxMDc0IDMwLjAyMDY4MzksMjUyLjM0MzU0NyBaIiB0cmFuc2Zvcm09InJvdGF0ZSgxMiAxMzEuMjc0IDE5My4yMykiLz48cGF0aCBzdHJva2U9IiM5Nzk3OTciLz48cmVjdCB3aWR0aD0iNzIuNTkzIiBoZWlnaHQ9IjUiIHg9IjY5IiB5PSIxODYiIGZpbGw9IiM4MjQyRjYiIHJ4PSIyLjUiLz48cmVjdCB3aWR0aD0iMzYuMjk3IiBoZWlnaHQ9IjUiIHg9IjY5IiB5PSIxOTYiIGZpbGw9IiM4MjQyRjYiIHJ4PSIyLjUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OSAxMDMpIj48cGF0aCBmaWxsPSJ1cmwoI3dvcmtzaG9wcy1hKSIgZD0iTTMsMCBMOTgsMCBMOTgsNzEgTDMsNzEgQzEuMzQzMTQ1NzUsNzEgNC41NDk1MDI1N2UtMTMsNjkuNjU2ODU0MiA0LjU0NzQ3MzUxZS0xMyw2OCBMNC41NDc0NzM1MWUtMTMsMyBDNC41NDU0NDQ0NWUtMTMsMS4zNDMxNDU3NSAxLjM0MzE0NTc1LDMuMDQzNTkxODhlLTE2IDMsMCBaIi8+PHBhdGggZmlsbD0iIzY5MjdFMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDkuNjUxNSwzMC4yMzY4OTQxIEM0OC43MDgwMzMxLDI5LjYxOTM2NDcgNDcuNDUyNDcxNSwzMC4yODE3NDI3IDQ3LjQ1MjQ3MTUsMzEuMzg1NzUzMSBMNDcuNDUyNDcxNSw0MC42MTQyNDk2IEM0Ny40NTI0NzE1LDQxLjcxODI0MjQgNDguNzA5ODI4OCw0Mi4zODA2MzgxIDQ5LjY1MTUsNDEuNzYzMTA4NiBMNTYuNjk5MjE5NSwzNy4xMjYzMzkgQzU3LjU1MTQ2NDIsMzYuNTUxOTA5NCA1Ny41NTE0NjQyLDM1LjM1OTk1MDUgNTYuNjk5MjE5NSwzNC43ODU1MjEgTDQ5LjY1MTUsMzAuMjM2ODk0MSBaIi8+PHBhdGggZmlsbD0iIzkwNTJGRiIgZD0iTTk3LjAwMDkxMzcsMCBMMTI2LjA5MTgyMywwIEMxMjcuNjk4NDY5LDAgMTI5LjAwMDkxNCwxLjM0MzE0NTc1IDEyOS4wMDA5MTQsMyBMMTI5LjAwMDkxNCwxMiBMOTcuMDAwOTEzNywxMiBMOTcuMDAwOTEzNywwIFoiLz48cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMyIgeD0iMTA5LjIyNiIgeT0iNCIgZmlsbD0iIzdBM0VFNiIgcng9IjEuNSIvPjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIxIiB4PSI5Ny4wMDEiIHk9IjExIiBmaWxsPSIjN0EzRUU2Ii8+PHBvbHlnb24gZmlsbD0iIzkwNTJGRiIgcG9pbnRzPSI5Ny4wMDEgMTIgMTI5LjAwMSAxMiAxMjkuMDAxIDI0IDk3LjAwMSAyNCIvPjxyZWN0IHdpZHRoPSIxNyIgaGVpZ2h0PSIzIiB4PSIxMDkuMjI2IiB5PSIxNiIgZmlsbD0iIzdBM0VFNiIgcng9IjEuNSIvPjxwb2x5Z29uIGZpbGw9InVybCgjd29ya3Nob3BzLWIpIiBwb2ludHM9Ijk3LjAwMSAyNCAxMjkuMDAxIDI0IDEyOS4wMDEgMzYgOTcuMDAxIDM2Ii8+PHJlY3Qgd2lkdGg9IjE3IiBoZWlnaHQ9IjMiIHg9IjEwOS4yMjYiIHk9IjI4IiBmaWxsPSIjN0EzRUU2IiByeD0iMS41Ii8+PHBvbHlnb24gZmlsbD0iIzkwNTJGRiIgcG9pbnRzPSI5Ny4wMDEgMzYgMTI5LjAwMSAzNiAxMjkuMDAxIDQ4IDk3LjAwMSA0OCIvPjxyZWN0IHdpZHRoPSIxNyIgaGVpZ2h0PSIzIiB4PSIxMDkuMjI2IiB5PSI0MCIgZmlsbD0iIzdBM0VFNiIgcng9IjEuNSIvPjxwb2x5Z29uIGZpbGw9IiM5MDUyRkYiIHBvaW50cz0iOTcuMDAxIDQ4IDEyOS4wMDEgNDggMTI5LjAwMSA2MCA5Ny4wMDEgNjAiLz48cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMyIgeD0iMTA5LjIyNiIgeT0iNTIiIGZpbGw9IiM3QTNFRTYiIHJ4PSIxLjUiLz48dXNlIGZpbGw9IiM5MDUyRkYiIHhsaW5rOmhyZWY9IiN3b3Jrc2hvcHMtYyIvPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI3dvcmtzaG9wcy1kKSIgeGxpbms6aHJlZj0iI3dvcmtzaG9wcy1jIi8+PHJlY3Qgd2lkdGg9IjE3IiBoZWlnaHQ9IjMiIHg9IjEwOS4yMjYiIHk9IjY0IiBmaWxsPSIjN0EzRUU2IiByeD0iMS41Ii8+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjEiIHg9Ijk3LjAwMSIgeT0iMjMiIGZpbGw9IiM3QTNFRTYiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMSIgeD0iOTcuMDAxIiB5PSIzNSIgZmlsbD0iIzdBM0VFNiIvPjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIxIiB4PSI5Ny4wMDEiIHk9IjQ3IiBmaWxsPSIjN0EzRUU2Ii8+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjEiIHg9Ijk3LjAwMSIgeT0iNTkiIGZpbGw9IiM3QTNFRTYiLz48cmVjdCB3aWR0aD0iMS4wMDgiIGhlaWdodD0iNzEiIHg9Ijk3LjAwMSIgZmlsbD0iIzdBM0VFNiIvPjxjaXJjbGUgY3g9IjEwMy41IiBjeT0iMTcuNSIgcj0iMi41IiBmaWxsPSIjN0EzRUU2Ii8+PGNpcmNsZSBjeD0iMTAzLjUiIGN5PSI1LjUiIHI9IjIuNSIgZmlsbD0iIzdBM0VFNiIvPjxjaXJjbGUgY3g9IjEwMy41IiBjeT0iMjkuNSIgcj0iMi41IiBmaWxsPSIjN0EzRUU2Ii8+PGNpcmNsZSBjeD0iMTAzLjUiIGN5PSI0MS41IiByPSIyLjUiIGZpbGw9IiM3QTNFRTYiLz48Y2lyY2xlIGN4PSIxMDMuNSIgY3k9IjUzLjUiIHI9IjIuNSIgZmlsbD0iIzdBM0VFNiIvPjxjaXJjbGUgY3g9IjEwMy41IiBjeT0iNjUuNSIgcj0iMi41IiBmaWxsPSIjN0EzRUU2Ii8+PC9nPjwvZz48L2c+PC9zdmc+" alt="Workshops" />
              </a>
              <a aria-label="View Talks" className="talk" href="/bootcamp/">
                <div><h4>Talks</h4></div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjIiIGhlaWdodD0iMTQwIiB2aWV3Qm94PSIwIDAgMjIyIDE0MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJ0YWxrcy1hIiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjIuNTI5JSIgc3RvcC1jb2xvcj0iIzMxNzZEMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzQxOEZGMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJ0YWxrcy1iIiB4MT0iODIuNzkzJSIgeDI9IjEuODAyJSIgeTE9IjEzLjEwNyUiIHkyPSIxMTEuMTc5JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzQxOEZGMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzMyN0NEQyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJ0YWxrcy1jIiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMzI3Q0RDIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzI3Q0RDIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InRhbGtzLWQiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIxOS43NDElIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMyN0NEQyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzQxOEZGMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJ0YWxrcy1lIiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iMTAwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNDE4RkYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzI3Q0RDIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjE5IC0zOTcxKSI+PHJlY3Qgd2lkdGg9IjE0NDAiIGhlaWdodD0iNzY5NiIgZmlsbD0iI0ZBRkFGQSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwNi4yODYgMzk3MSkiPjxyZWN0IHdpZHRoPSIyMjIiIGhlaWdodD0iMTQwIiB4PSIxMi43MTQiIGZpbGw9IiMzMjdDREMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNSkiPjxyZWN0IHdpZHRoPSIxNTcuNDU0IiBoZWlnaHQ9IjkyIiB4PSI0NSIgeT0iOCIgZmlsbD0iIzQxOEZGMyIgZmlsbC1ydWxlPSJub256ZXJvIiByeD0iMyIvPjxwYXRoIGZpbGw9InVybCgjdGFsa3MtYSkiIGQ9Ik01Mi44MTA1NzI3LDEwMCBDNzMuODUzMTQyNiw3OC44MzMzMzMzIDEwMC43NDc0MTYsNjUuMTY2NjY2NyAxMzMuNDkzMzkyLDU5IEMxNjYuMjM5MzY4LDUyLjgzMzMzMzMgMTg5LjIyMTc0Nyw0MC44MzMzMzMzIDIwMi40NDA1MjksMjMgTDIwMi40NDA1MjksOTcgQzIwMi40NDA1MjksOTguNjU2ODU0MiAyMDEuMDk3MzgzLDEwMCAxOTkuNDQwNTI5LDEwMCBMNTIuODEwNTcyNywxMDAgWiIvPjxwYXRoIGZpbGw9InVybCgjdGFsa3MtYikiIHN0cm9rZT0idXJsKCN0YWxrcy1jKSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNjkuNzEzNjU2NCw0NSBMMTE3LjcxMzY1Niw0NSBDMTE5LjM3MDUxMSw0NSAxMjAuNzEzNjU2LDQ2LjM0MzE0NTggMTIwLjcxMzY1Niw0OCBMMTIwLjcxMzY1NiwxMDAgTDY2LjcxMzY1NjQsMTAwIEw2Ni43MTM2NTY0LDQ4IEM2Ni43MTM2NTY0LDQ2LjM0MzE0NTggNjguMDU2ODAyMSw0NSA2OS43MTM2NTY0LDQ1IFoiLz48cmVjdCB3aWR0aD0iMjciIGhlaWdodD0iNCIgeD0iNzQuNzE0IiB5PSI2NCIgZmlsbD0iIzY1QTlGRiIgcng9IjIiLz48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iNCIgeD0iNzQuNzE0IiB5PSI3MyIgZmlsbD0iIzY1QTlGRiIgcng9IjIiLz48cGF0aCBmaWxsPSIjMzI3Q0RDIiBkPSJNNjkuNzEzNjU2NCw0NiBMMTE3LjcxMzY1Niw0NiBDMTE4LjgxODIyNiw0NiAxMTkuNzEzNjU2LDQ2Ljg5NTQzMDUgMTE5LjcxMzY1Niw0OCBMMTE5LjcxMzY1Niw1NCBMNjcuNzEzNjU2NCw1NCBMNjcuNzEzNjU2NCw0OCBDNjcuNzEzNjU2NCw0Ni44OTU0MzA1IDY4LjYwOTA4NjksNDYgNjkuNzEzNjU2NCw0NiBaIi8+PHJlY3Qgd2lkdGg9IjUyIiBoZWlnaHQ9IjIiIHg9IjY3LjcxNCIgeT0iNTQiIGZpbGw9IiMzMjdDREMiLz48Y2lyY2xlIGN4PSI3MiIgY3k9IjUwIiByPSIxIiBmaWxsPSIjNjVBOEZGIi8+PGNpcmNsZSBjeD0iNzUuNzE0IiBjeT0iNTAiIHI9IjEiIGZpbGw9IiM2NUE4RkYiLz48Y2lyY2xlIGN4PSI3OS43MTQiIGN5PSI1MCIgcj0iMSIgZmlsbD0iIzY1QThGRiIvPjxwYXRoIGZpbGw9IiMzMjdDREMiIGQ9Ik00Ljg4OTg2Nzg0LDAgQzYuNTA3MjkzNjgsMCA3LjgyMzc4ODU1LDEuMzQ1NzE0NTUgNy44MjM3ODg1NSwzIEM3LjgyMzc4ODU1LDQuNjU0Mjg1NDUgNi41MDcyOTM2OCw2IDQuODg5ODY3ODQsNiBDMy4yNzI0MzkxNyw2IDEuOTU1OTQ3MTQsNC42NTQyODU0NSAxLjk1NTk0NzE0LDMgQzEuOTU1OTQ3MTQsMS4zNDU3MTQ1NSAzLjI3MjQzOTE3LDAgNC44ODk4Njc4NCwwIFogTTIuOTM0MjQzMzksNyBMNi44NDU0OTIzLDcgQzguNDcwOTQyOCw3IDkuNzc5NzM1NjgsOC4zNDM4OTAyIDkuNzc5NzM1NjgsMTAuMDAxNjY1MSBMOS43Nzk3MzU2OCwxNSBDOS43Nzk3MzU2OCwxNS4yMjk0OTk4IDkuNjI3MTcxNjYsMTUuNDI5NTAwNiA5LjQwOTA4Mzk5LDE1LjQ4NTAwMDYgTDcuNzkyOTgyNTMsMTUuODk3OTk4OCBMNy4zMzI4NDU5NiwyMi41NDE1MDAxIEM3LjMxMTgxODk0LDIyLjgwMTAwMDYgNy4xMDA1NzcwNCwyMyA2Ljg0NTgxNDk4LDIzIEwyLjkzMzkyMDcsMjMgQzIuNjc5MTU4NjQsMjMgMi40Njc5MTY3NCwyMi44MDEwMDA2IDIuNDQ2ODg5NzcsMjIuNTQxNTAwMSBMMS45ODY3NTMyMSwxNS44OTc5OTg4IEwwLjM3MDY1MjE3OCwxNS40ODUwMDA2IEMwLjE1MjU2NDAyMywxNS40Mjk1MDA2IDEuMTM2ODY4MzhlLTEzLDE1LjIyOTQ5OTggMS4xMzY4NjgzOGUtMTMsMTUgTDEuMTM2ODY4MzhlLTEzLDEwLjAwMTY2NTEgQzEuMTM2ODY4MzhlLTEzLDguMzM5MDE5OCAxLjMxMzcwNTI0LDcgMi45MzQyNDMzOSw3IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1OS40MSA3OSkiLz48cGF0aCBmaWxsPSIjNDE4RkYzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00Ni4zMzM4MDMxLDEwMiBMMjAxLjA5MzUxLDEwMiBDMjAxLjk1MDMxOSwxMDIgMjAyLjc2NjI0MywxMDIuMzY2MzU1IDIwMy4zMzU1MzksMTAzLjAwNjY4NiBMMjIyLDEyNCBMMjUuNDI3MzEyOCwxMjQgTDQ0LjA5MTc3MzMsMTAzLjAwNjY4NiBDNDQuNjYxMDcwMiwxMDIuMzY2MzU1IDQ1LjQ3Njk5MzcsMTAyIDQ2LjMzMzgwMzEsMTAyIFoiLz48cGF0aCBzdHJva2U9IiMzMjdDREMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0zNS42OTYwMzUyLDExMi45NTQ1NDUgTDIxMS43OTQzMTEsMTEyLjk1NDU0NSIvPjxwYXRoIGZpbGw9InVybCgjdGFsa3MtZCkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwNC4zOTY0NzYgMTAwLjg2MjQ1TDIwNC4zOTY0NzYgMjkuMzMyODlDMjA0LjM5NjQ3NiAyOC40ODQyOTAxIDIwNC43NDc5NTMgMjcuNjc1Mzg3IDIwNS4zNjM4MyAyNy4xMDY1ODIxTDIzNC43MTM2NTYgMS44MTg5ODk0ZS0xMiAyMzQuNzEzNjU2IDEzNyAyMDUuMTM0MDk4IDEwMi44NTE1NTZDMjA0LjY1ODg1OSAxMDIuMzAyOTExIDIwNC4zOTY0NzYgMTAxLjU5NTM1NyAyMDQuMzk2NDc2IDEwMC44NjI0NXpNNDMuMDMwODM3IDEwMC44NjI0NUM0My4wMzA4MzcgMTAxLjU5NTM1NyA0Mi43Njg0NTM5IDEwMi4zMDI5MTEgNDIuMjkzMjE0NyAxMDIuODUxNTU2TDEyLjcxMzY1NjQgMTM3IDEyLjcxMzY1NjQtMS44MTg5ODk0ZS0xMiA0Mi4wNjM0ODMgMjcuMTA2NTgyMUM0Mi42NzkzNjAyIDI3LjY3NTM4NyA0My4wMzA4MzcgMjguNDg0MjkwMSA0My4wMzA4MzcgMjkuMzMyODlMNDMuMDMwODM3IDEwMC44NjI0NXoiLz48cGF0aCBmaWxsPSIjNDE4RkYzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yNi4wMDA5NTI3LDEyNSBMMjIxLjQyNjM2LDEyNSBDMjIyLjI4ODM4NywxMjUgMjIzLjEwODc2LDEyNS4zNzA4MTQgMjIzLjY3ODMwNCwxMjYuMDE3ODkzIEwyNDcuNDI3MzEzLDE1MyBMMCwxNTMgTDIzLjc0OTAwOSwxMjYuMDE3ODkzIEMyNC4zMTg1NTI1LDEyNS4zNzA4MTQgMjUuMTM4OTI1NCwxMjUgMjYuMDAwOTUyNywxMjUgWiIvPjxwb2x5Z29uIGZpbGw9InVybCgjdGFsa3MtZSkiIGZpbGwtb3BhY2l0eT0iLjgiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI0My4wMzEgMTAwIDIwMi40NDEgMTAwIDIzNC4xMTcgMTM1IDE1LjY0OCAxMzUiLz48cGF0aCBzdHJva2U9IiMzMjdDREMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0xMjMuNzQ1MTczLDEwMiBMMTIzLjc0NTE3MywxMzciLz48cGF0aCBzdHJva2U9IiMzMjdDREMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0wLjUyMDUwMzUxLDAgTDEzLjIzNDE1OTksMzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2Mi4zNDQgMTAyKSIvPjxwYXRoIHN0cm9rZT0iIzMyN0NEQyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAuNTIwNTAzNTEsMCBMMTMuMjM0MTU5OSwzNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgODUuMDg0IDEwMikiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Talks" />
              </a>
              <a href="mailto:tarun.softengg@gmail.com" aria-label="View 3 Minutes with " className="chat">
                <div><h4>3 Minutes with </h4></div>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjEiIGhlaWdodD0iMTQwIiB2aWV3Qm94PSIwIDAgMjIxIDE0MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSIzLW1pbnV0ZXMtYSIgeDE9IjEwLjUxMSUiIHgyPSIxMDIuMDY0JSIgeTE9IjM0Ljk2NCUiIHkyPSI2Ni45MjclIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkZDNzM3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZCNzAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IjMtbWludXRlcy1iIiB4MT0iLTIzLjMzNCUiIHgyPSI2Mi4wMTIlIiB5MT0iLTk3LjYyJSIgeTI9IjExNy4wNDclIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkZGMEJCIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZERDg1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IjMtbWludXRlcy1jIiB4MT0iLTkuNDEzJSIgeDI9Ijg4LjI1MSUiIHkxPSI0Ny4yMTIlIiB5Mj0iNTAuNjIxJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGRjBCQiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGREQ4NSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLS45NzgpIj48cmVjdCB3aWR0aD0iMjIxLjk3OCIgaGVpZ2h0PSIxNDAiIGZpbGw9IiNGRkI3MDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGZpbGw9InVybCgjMy1taW51dGVzLWEpIiBkPSJNMC45Nzc4NzYxMDYsNDMgQzI1LjU1MzQ1OTEsMzMuNjY2NjY2NyA1MC4wMzI1MzE5LDM0IDc0LjQxNTA5NDMsNDQgQzExMC45ODg5MzgsNTkgMTIxLjg1OTgxOCw4NS40NTQ1NDU1IDE2My45MTg4NDcsOTMuNzI3MjcyNyBDMTkxLjk1ODIsOTkuMjQyNDI0MiAyMTEuMzExMjA5LDk2LjgxODE4MTggMjIxLjk3Nzg3Niw4Ni40NTQ1NDU1IEwyMjEuOTc3ODc2LDE0MC41IEwwLjk3Nzg3NjEwNiwxNDAuNSBMMC45Nzc4NzYxMDYsNDMgWiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5IDIzKSI+PHBhdGggZmlsbD0iI0ZGREQ4NSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTguOTIyOTU2LDY4LjE4MTgxODIgTDM0LjA2MTMyMDgsNjguMTgxODE4MiBMMzQuMDYxMzIwOCw3MiBMMTguOTIyOTU2LDcyIEwxOC45MjI5NTYsNjguMTgxODE4MiBaIE0wLDY4LjE4MTgxODIgTDE1LjEzODM2NDgsNjguMTgxODE4MiBMMTUuMTM4MzY0OCw3MiBMMCw3MiBMMCw2OC4xODE4MTgyIFogTTE4LjkyMjk1Niw2MC41NDU0NTQ1IEwzNC4wNjEzMjA4LDYwLjU0NTQ1NDUgTDM0LjA2MTMyMDgsNjQuMzYzNjM2NCBMMTguOTIyOTU2LDY0LjM2MzYzNjQgTDE4LjkyMjk1Niw2MC41NDU0NTQ1IFogTTAsNjAuNTQ1NDU0NSBMMTUuMTM4MzY0OCw2MC41NDU0NTQ1IEwxNS4xMzgzNjQ4LDY0LjM2MzYzNjQgTDAsNjQuMzYzNjM2NCBMMCw2MC41NDU0NTQ1IFogTTE4LjkyMjk1Niw1Mi45MDkwOTA5IEwzNC4wNjEzMjA4LDUyLjkwOTA5MDkgTDM0LjA2MTMyMDgsNTYuNzI3MjcyNyBMMTguOTIyOTU2LDU2LjcyNzI3MjcgTDE4LjkyMjk1Niw1Mi45MDkwOTA5IFogTTE4LjkyMjk1Niw0NS4yNzI3MjczIEwzNC4wNjEzMjA4LDQ1LjI3MjcyNzMgTDM0LjA2MTMyMDgsNDkuMDkwOTA5MSBMMTguOTIyOTU2LDQ5LjA5MDkwOTEgTDE4LjkyMjk1Niw0NS4yNzI3MjczIFogTTE4LjkyMjk1NiwzNy42MzYzNjM2IEwzNC4wNjEzMjA4LDM3LjYzNjM2MzYgTDM0LjA2MTMyMDgsNDEuNDU0NTQ1NSBMMTguOTIyOTU2LDQxLjQ1NDU0NTUgTDE4LjkyMjk1NiwzNy42MzYzNjM2IFogTTE4LjkyMjk1NiwzMCBMMzQuMDYxMzIwOCwzMCBMMzQuMDYxMzIwOCwzMy44MTgxODE4IEwxOC45MjI5NTYsMzMuODE4MTgxOCBMMTguOTIyOTU2LDMwIFogTTM3Ljg0NTkxMTksNjguMTgxODE4MiBMNTIuOTg0Mjc2Nyw2OC4xODE4MTgyIEw1Mi45ODQyNzY3LDcyIEwzNy44NDU5MTE5LDcyIEwzNy44NDU5MTE5LDY4LjE4MTgxODIgWiBNMzcuODQ1OTExOSw2MC41NDU0NTQ1IEw1Mi45ODQyNzY3LDYwLjU0NTQ1NDUgTDUyLjk4NDI3NjcsNjQuMzYzNjM2NCBMMzcuODQ1OTExOSw2NC4zNjM2MzY0IEwzNy44NDU5MTE5LDYwLjU0NTQ1NDUgWiBNMzcuODQ1OTExOSw1Mi45MDkwOTA5IEw1Mi45ODQyNzY3LDUyLjkwOTA5MDkgTDUyLjk4NDI3NjcsNTYuNzI3MjcyNyBMMzcuODQ1OTExOSw1Ni43MjcyNzI3IEwzNy44NDU5MTE5LDUyLjkwOTA5MDkgWiBNMzcuODQ1OTExOSw0NS4yNzI3MjczIEw1Mi45ODQyNzY3LDQ1LjI3MjcyNzMgTDUyLjk4NDI3NjcsNDkuMDkwOTA5MSBMMzcuODQ1OTExOSw0OS4wOTA5MDkxIEwzNy44NDU5MTE5LDQ1LjI3MjcyNzMgWiBNMzcuODQ1OTExOSwzNy42MzYzNjM2IEw1Mi45ODQyNzY3LDM3LjYzNjM2MzYgTDUyLjk4NDI3NjcsNDEuNDU0NTQ1NSBMMzcuODQ1OTExOSw0MS40NTQ1NDU1IEwzNy44NDU5MTE5LDM3LjYzNjM2MzYgWiBNNTYuNzY4ODY3OSw2OC4xODE4MTgyIEw3MS45MDcyMzI3LDY4LjE4MTgxODIgTDcxLjkwNzIzMjcsNzIgTDU2Ljc2ODg2NzksNzIgTDU2Ljc2ODg2NzksNjguMTgxODE4MiBaIE03NS42OTE4MjM5LDY4LjE4MTgxODIgTDkwLjgzMDE4ODcsNjguMTgxODE4MiBMOTAuODMwMTg4Nyw3MiBMNzUuNjkxODIzOSw3MiBMNzUuNjkxODIzOSw2OC4xODE4MTgyIFogTTU2Ljc2ODg2NzksNjAuNTQ1NDU0NSBMNzEuOTA3MjMyNyw2MC41NDU0NTQ1IEw3MS45MDcyMzI3LDY0LjM2MzYzNjQgTDU2Ljc2ODg2NzksNjQuMzYzNjM2NCBMNTYuNzY4ODY3OSw2MC41NDU0NTQ1IFogTTc1LjY5MTgyMzksNjAuNTQ1NDU0NSBMOTAuODMwMTg4Nyw2MC41NDU0NTQ1IEw5MC44MzAxODg3LDY0LjM2MzYzNjQgTDc1LjY5MTgyMzksNjQuMzYzNjM2NCBMNzUuNjkxODIzOSw2MC41NDU0NTQ1IFogTTU2Ljc2ODg2NzksNTIuOTA5MDkwOSBMNzEuOTA3MjMyNyw1Mi45MDkwOTA5IEw3MS45MDcyMzI3LDU2LjcyNzI3MjcgTDU2Ljc2ODg2NzksNTYuNzI3MjcyNyBMNTYuNzY4ODY3OSw1Mi45MDkwOTA5IFogTTc1LjY5MTgyMzksNTIuOTA5MDkwOSBMOTAuODMwMTg4Nyw1Mi45MDkwOTA5IEw5MC44MzAxODg3LDU2LjcyNzI3MjcgTDc1LjY5MTgyMzksNTYuNzI3MjcyNyBMNzUuNjkxODIzOSw1Mi45MDkwOTA5IFogTTU2Ljc2ODg2NzksNDUuMjcyNzI3MyBMNzEuOTA3MjMyNyw0NS4yNzI3MjczIEw3MS45MDcyMzI3LDQ5LjA5MDkwOTEgTDU2Ljc2ODg2NzksNDkuMDkwOTA5MSBMNTYuNzY4ODY3OSw0NS4yNzI3MjczIFogTTc1LjY5MTgyMzksNDUuMjcyNzI3MyBMOTAuODMwMTg4Nyw0NS4yNzI3MjczIEw5MC44MzAxODg3LDQ5LjA5MDkwOTEgTDc1LjY5MTgyMzksNDkuMDkwOTA5MSBMNzUuNjkxODIzOSw0NS4yNzI3MjczIFogTTc1LjY5MTgyMzksMzcuNjM2MzYzNiBMOTAuODMwMTg4NywzNy42MzYzNjM2IEw5MC44MzAxODg3LDQxLjQ1NDU0NTUgTDc1LjY5MTgyMzksNDEuNDU0NTQ1NSBMNzUuNjkxODIzOSwzNy42MzYzNjM2IFogTTE0Ny4wNDI3MDEsNjguMTgxODE4MiBMMTQ3LjA0MjcwMSw3MiBMMTMxLjg3Njg2Miw3MiBMMTMxLjg3Njg2Miw2OC4xODE4MTgyIEwxNDcuMDQyNzAxLDY4LjE4MTgxODIgWiBNMTY2LDY4LjE4MTgxODIgTDE2Niw3MiBMMTUwLjgzNDE2MSw3MiBMMTUwLjgzNDE2MSw2OC4xODE4MTgyIEwxNjYsNjguMTgxODE4MiBaIE0xNDcuMDQyNzAxLDYwLjU0NTQ1NDUgTDE0Ny4wNDI3MDEsNjQuMzYzNjM2NCBMMTMxLjg3Njg2Miw2NC4zNjM2MzY0IEwxMzEuODc2ODYyLDYwLjU0NTQ1NDUgTDE0Ny4wNDI3MDEsNjAuNTQ1NDU0NSBaIE0xNjYsNjAuNTQ1NDU0NSBMMTY2LDY0LjM2MzYzNjQgTDE1MC44MzQxNjEsNjQuMzYzNjM2NCBMMTUwLjgzNDE2MSw2MC41NDU0NTQ1IEwxNjYsNjAuNTQ1NDU0NSBaIE0xNDcuMDQyNzAxLDUyLjkwOTA5MDkgTDE0Ny4wNDI3MDEsNTYuNzI3MjcyNyBMMTMxLjg3Njg2Miw1Ni43MjcyNzI3IEwxMzEuODc2ODYyLDUyLjkwOTA5MDkgTDE0Ny4wNDI3MDEsNTIuOTA5MDkwOSBaIE0xNjYsNTIuOTA5MDkwOSBMMTY2LDU2LjcyNzI3MjcgTDE1MC44MzQxNjEsNTYuNzI3MjcyNyBMMTUwLjgzNDE2MSw1Mi45MDkwOTA5IEwxNjYsNTIuOTA5MDkwOSBaIE0xNDcuMDQyNzAxLDQ1LjI3MjcyNzMgTDE0Ny4wNDI3MDEsNDkuMDkwOTA5MSBMMTMxLjg3Njg2Miw0OS4wOTA5MDkxIEwxMzEuODc2ODYyLDQ1LjI3MjcyNzMgTDE0Ny4wNDI3MDEsNDUuMjcyNzI3MyBaIE0xNjYsNDUuMjcyNzI3MyBMMTY2LDQ5LjA5MDkwOTEgTDE1MC44MzQxNjEsNDkuMDkwOTA5MSBMMTUwLjgzNDE2MSw0NS4yNzI3MjczIEwxNjYsNDUuMjcyNzI3MyBaIE0xNDcuMDQyNzAxLDM3LjYzNjM2MzYgTDE0Ny4wNDI3MDEsNDEuNDU0NTQ1NSBMMTMxLjg3Njg2Miw0MS40NTQ1NDU1IEwxMzEuODc2ODYyLDM3LjYzNjM2MzYgTDE0Ny4wNDI3MDEsMzcuNjM2MzYzNiBaIE0xNDcuMDQyNzAxLDMwIEwxNDcuMDQyNzAxLDMzLjgxODE4MTggTDEzMS44NzY4NjIsMzMuODE4MTgxOCBMMTMxLjg3Njg2MiwzMCBMMTQ3LjA0MjcwMSwzMCBaIE0xMjguMDg1NDAyLDY4LjE4MTgxODIgTDEyOC4wODU0MDIsNzIgTDExMi45MTk1NjMsNzIgTDExMi45MTk1NjMsNjguMTgxODE4MiBMMTI4LjA4NTQwMiw2OC4xODE4MTgyIFogTTEyOC4wODU0MDIsNjAuNTQ1NDU0NSBMMTI4LjA4NTQwMiw2NC4zNjM2MzY0IEwxMTIuOTE5NTYzLDY0LjM2MzYzNjQgTDExMi45MTk1NjMsNjAuNTQ1NDU0NSBMMTI4LjA4NTQwMiw2MC41NDU0NTQ1IFogTTEyOC4wODU0MDIsNTIuOTA5MDkwOSBMMTI4LjA4NTQwMiw1Ni43MjcyNzI3IEwxMTIuOTE5NTYzLDU2LjcyNzI3MjcgTDExMi45MTk1NjMsNTIuOTA5MDkwOSBMMTI4LjA4NTQwMiw1Mi45MDkwOTA5IFogTTEwOS4xMjgxMDMsNjguMTgxODE4MiBMMTA5LjEyODEwMyw3MiBMOTMuOTYyMjY0Miw3MiBMOTMuOTYyMjY0Miw2OC4xODE4MTgyIEwxMDkuMTI4MTAzLDY4LjE4MTgxODIgWiBNMTA5LjEyODEwMyw2MC41NDU0NTQ1IEwxMDkuMTI4MTAzLDY0LjM2MzYzNjQgTDkzLjk2MjI2NDIsNjQuMzYzNjM2NCBMOTMuOTYyMjY0Miw2MC41NDU0NTQ1IEwxMDkuMTI4MTAzLDYwLjU0NTQ1NDUgWiBNMTA5LjEyODEwMyw1Mi45MDkwOTA5IEwxMDkuMTI4MTAzLDU2LjcyNzI3MjcgTDkzLjk2MjI2NDIsNTYuNzI3MjcyNyBMOTMuOTYyMjY0Miw1Mi45MDkwOTA5IEwxMDkuMTI4MTAzLDUyLjkwOTA5MDkgWiBNMTA5LjEyODEwMyw0NS4yNzI3MjczIEwxMDkuMTI4MTAzLDQ5LjA5MDkwOTEgTDkzLjk2MjI2NDIsNDkuMDkwOTA5MSBMOTMuOTYyMjY0Miw0NS4yNzI3MjczIEwxMDkuMTI4MTAzLDQ1LjI3MjcyNzMgWiIvPjxwYXRoIGZpbGw9InVybCgjMy1taW51dGVzLWIpIiBkPSJNMjguOTAzMjI1OCw4LjA1MTc3OTY5ZS0wNiBMMy4wOTY3NzQxOSw4LjA1MTc3OTY5ZS0wNiBDMS4zODY0NzMwMyw4LjA1MTc3OTY5ZS0wNiAxLjcxOTA1NTAxZS0xNiwxLjUzNTAzMTEzIDAsMy40Mjg1NzgwNiBMMCwyMC41NzE0MjgxIEMxLjcxOTA1NTAxZS0xNiwyMi40NjQ5NzUxIDEuMzg2NDczMDMsMjMuOTk5OTk4MSAzLjA5Njc3NDE5LDIzLjk5OTk5ODEgTDcuMjI1ODA2NDUsMjMuOTk5OTk4MSBMNy4yMjU4MDY0NSwzMS40Mjg1NjY1IEM3LjIyNTUwNzc4LDMxLjY0NzIwNjYgNy4zMzc5MTk5OCwzMS44NDY4NjkxIDcuNTE1MzU0ODQsMzEuOTQyODUyIEM3LjU4NTg3NzcyLDMxLjk4MTAzMTMgNy42NjM0MzQ2OSwzMi4wMDA1OTA5IDcuNzQxOTM1NDgsMzEuOTk5OTk0OCBDNy44NTY3NDIsMzEuOTk5OTQ0OCA3Ljk2ODI1NjM3LDMxLjk1NzUxNzIgOC4wNTg4Mzg3MSwzMS44Nzk0MjM0IEwxNy4yMDkyOTAzLDIzLjk5OTk5ODEgTDI4LjkwMzIyNTgsMjMuOTk5OTk4MSBDMzAuNjEzNTI3LDIzLjk5OTk5ODEgMzIsMjIuNDY0OTc1MSAzMiwyMC41NzE0MjgxIEwzMiwzLjQyODU3ODA2IEMzMiwxLjUzNTAzMTEzIDMwLjYxMzUyNyw4LjA1MTc3OTY5ZS0wNiAyOC45MDMyMjU4LDguMDUxNzc5NjllLTA2IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkzLjk3OCkiLz48cmVjdCB3aWR0aD0iMTkiIGhlaWdodD0iNCIgeD0iOTguOTc4IiB5PSI1IiBmaWxsPSIjRkZCNzAwIiByeD0iMiIvPjxyZWN0IHdpZHRoPSIxMSIgaGVpZ2h0PSI0IiB4PSI5OC45NzgiIHk9IjEzIiBmaWxsPSIjRkZCNzAwIiByeD0iMiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOSAxMDEpIj48cmVjdCB3aWR0aD0iMTY2IiBoZWlnaHQ9IjEyIiBmaWxsPSJ1cmwoIzMtbWludXRlcy1jKSIgcng9IjIiLz48cGF0aCBmaWxsPSIjRkZCNzAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik03LjA5MDA3NzA4LDMuMTE4NDQ3MDQgQzYuNjEyOTAwNTQsMi44MDk2ODIzMyA1Ljk3Nzg3NjExLDMuMTQwODcxMzQgNS45Nzc4NzYxMSwzLjY5Mjg3NjU2IEw1Ljk3Nzg3NjExLDguMzA3MTI0OCBDNS45Nzc4NzYxMSw4Ljg1OTEyMTE5IDYuNjEzODA4NzUsOS4xOTAzMTkwMyA3LjA5MDA3NzA4LDguODgxNTU0MzIgTDEwLjY1NDU5NjcsNi41NjMxNjk0OCBDMTEuMDg1NjM1OSw2LjI3NTk1NDcyIDExLjA4NTYzNTksNS42Nzk5NzUyNSAxMC42NTQ1OTY3LDUuMzkyNzYwNDkgTDcuMDkwMDc3MDgsMy4xMTg0NDcwNCBaIi8+PHJlY3Qgd2lkdGg9IjE0NCIgaGVpZ2h0PSI0IiB4PSIxOCIgeT0iNCIgZmlsbD0iI0ZGQjcwMCIgcng9IjIiLz48cmVjdCB3aWR0aD0iNTUiIGhlaWdodD0iNCIgeD0iMTgiIHk9IjQiIGZpbGw9IiNFNkE1MDAiIHJ4PSIyIi8+PC9nPjwvZz48L3N2Zz4=" alt="3 Minutes with " />
              </a>
            </div>
          </div>
        )
    }
}
