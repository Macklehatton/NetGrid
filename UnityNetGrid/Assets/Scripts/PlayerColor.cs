using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Mirror;

public class PlayerColor : NetworkBehaviour
{
    [SyncVar(hook = nameof(ApplyColor))]
    public Color color;

    public void ApplyColor(Color oldColor, Color newColor)
    {
        gameObject.gameObject.GetComponent<Renderer>().material.color = newColor;
    }
}
