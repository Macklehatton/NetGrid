using Mirror;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CustomPlayerSpawner : PlayerSpawner
{
    public override void Start()
    {
        base.Start();
    }

    public override void OnServerAddPlayer(INetworkConnection conn)
    {
        base.OnServerAddPlayer(conn);
        PlayerColor playerColor = conn.Identity.GetComponent<PlayerColor>();
        playerColor.color = new Color(Random.value, Random.value, Random.value);
    }
}
